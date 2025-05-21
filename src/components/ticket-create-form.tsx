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
    console.log(data);
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
