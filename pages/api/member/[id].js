export default function handler(req, res) {
	// TODO: get address/ens fron id                                                                                                                                                                                                                                                                                                                                                                                                                    
  const { id } = req.query;
	res.json({
		"description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
		"external_url": `https://openseacreatures.io/${id}`, 
		"image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
		"name": "Sponsor of Tim Qian",
		// "attributes": [ ... ]
	});
  // res.end(`Post: ${id}`);
}
