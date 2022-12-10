import FormBuilder from '../../components/forms/FormBuilder';

export default function Create() {
  return (
    <div className="min-h-[90vh]">
      <h1 className="text-3xl font-semibold mb-4">Create a new form</h1>
      <FormBuilder type="create" />
    </div>
  );
}
