"use client";

import { LucideLoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action, isPending] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "" }
  );

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <Button disabled={isPending} type="submit">
        {isPending && <LucideLoaderCircle className="w-4 h-4 animate-spin" />}
        {ticket ? "Edit" : "Create"}
      </Button>
      {actionState.message}
    </form>
  );
};

export { TicketUpsertForm };
