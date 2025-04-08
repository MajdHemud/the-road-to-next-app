import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const DocumentIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="size-6"
	>
		<path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
		<path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
	</svg>
);

const PencilIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="size-6"
	>
		<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
	</svg>
);

const CheckIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="size-6"
	>
		<path
			fillRule="evenodd"
			d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
			clipRule="evenodd"
		/>
	</svg>
);

const TICKET_ICONS = {
	OPEN: <DocumentIcon />,
	IN_PROGRESS: <PencilIcon />,
	DONE: <CheckIcon />,
};

const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
				<p className="text-sm text-muted-foreground">
					All your tickets at one place
				</p>
			</div>
			<Separator />
			<div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
				{initialTickets.map((ticket) => (
					<Card key={ticket.id} className="w-full max-w-[420px]">
						<CardHeader>
							<CardTitle className="flex gap-x-2">
								<span>{TICKET_ICONS[ticket.status]}</span>
								<span className="truncate">{ticket.title}</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<span className="line-clamp-3 whitespace-break-spaces">
								{ticket.content}
							</span>
						</CardContent>
						<CardFooter>
							<Link href={ticketPath(ticket.id)} className="text-sm underline">
								View
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default TicketsPage;
