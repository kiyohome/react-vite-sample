import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const Event = () => {
  const form = useForm({
    initialValues: {
      name: '',
    },
    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        required
        label="Name"
        placeholder="Event name"
        {...form.getInputProps('name')}
      />
      <Group position="center" mt="md">
        <Button type="submit">Add</Button>
      </Group>
    </form>
  );
};

export default Event;
