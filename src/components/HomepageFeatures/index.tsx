import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

type FeatureItem = {
	title: string
	Svg: React.ComponentType<React.ComponentProps<"svg">>
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				React was designed from the ground up to be easily installed and used to
				get your website up and running quickly.
			</>
		),
	},
	{
		title: "Mycos Staff Friendly",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				If you not understand or need help, don't hesitate to ask. We will help
				you.
			</>
		),
	},
	{
		title: "Please Share a real feedback",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				Every time we workshop at CMU, we will keep up with your feedback and
				suggestions then we keep improving for the next workshop.
			</>
		),
	},
]

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
