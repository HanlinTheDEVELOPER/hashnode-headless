import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div
				className="min-h-screen bg-gradient-to-br
				from-blue-100
				via-blue-50
				to-white dark:bg-neutral-950"
			>
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
