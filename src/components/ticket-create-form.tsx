import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const TicketCreateForm = () => {
  const createTicket = async (formData: FormData) => {
    "use server";

    const data = {
      title: formData.get("title"),
      content: formData.get("content"),
    };

    await prisma.ticket.create({
      data: {
        title: data.title as string,
        content: data.content as string,
      },
    });

    // Redirect to the tickets page after creating a ticket
    revalidatePath(ticketsPath());
  };

  return (
    <form className="flex flex-col gap-y-2" action={createTicket}>
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" />
      <Button type="submit">Create</Button>
    </form>
  );
};

export { TicketCreateForm };
