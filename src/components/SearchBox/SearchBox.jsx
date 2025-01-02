import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filters/actions";

import _ from "lodash";

export const SearchBox = () => {
  const searchBoxId = useId();
  const dispatch = useDispatch();

  const handleChange = (values) => {
    dispatch(filterContacts(values.target.value));
  };

  return (
    <Formik>
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
            onChange={_.debounce(handleChange, 300)}
          />
        </div>
      </Form>
    </Formik>
  );
};
