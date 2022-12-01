import { SponsorCall } from "../generated/SponsorCat/SponsorCat";
import { Sponsor, Sponsorship, Creator } from "../generated/schema";

export function handleSponsor(call: SponsorCall): void {
  let sponsor = Sponsor.load(call.from);
  if (sponsor == null) {
    sponsor = new Sponsor(call.from);
    sponsor.createdAt = call.block.timestamp;
    sponsor.save();
  }
  let creator = Creator.load(call.inputs.creator);
  if (creator == null) {
    creator = new Creator(call.inputs.creator);
    creator.createdAt = call.block.timestamp;
    creator.save();
  }

  let id = call.transaction.hash;
  let sponsorship = new Sponsorship(id);
  sponsorship.sponsor = sponsor.id;
  sponsorship.creator = creator.id;
  sponsorship.createdAt = call.block.timestamp;
  sponsorship.amount = call.transaction.value;
  sponsorship.save();
}
