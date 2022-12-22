import { GridPattern } from "./GridPattern";

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={62}
          height={36}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
    </div>
  );
}

export default function FeatureCard({ feature }) {
  return (
    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 relative border">
      <ResourcePattern {...feature.pattern} />
      <div className="mt-6">
        {/* <div>
			<span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
				<feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
			</span>
		</div> */}
        <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
          {feature.name}
        </h3>
        <p className="mt-5 text-base leading-7 text-gray-600">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
