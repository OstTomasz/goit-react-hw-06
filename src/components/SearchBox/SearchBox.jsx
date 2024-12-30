import { useId } from "react";
import { Formik, Form, Field } from "formik";

export const SearchBox = ({ handleFilter }) => {
  const searchBoxId = useId();

  const handleChange = (values) => {
    handleFilter(values.target.value);
  };
  return (
    <Formik initialValues={{}}>
      <Form className="form">
        <div>
          <label className="label" htmlFor={searchBoxId}>
            Find contacts by name
          </label>
          <Field
            className="field"
            type="text"
            name="search"
            placeholder="Search..."
            id={searchBoxId}
            onChange={handleChange}
          />
        </div>
      </Form>
    </Formik>
  );
};
