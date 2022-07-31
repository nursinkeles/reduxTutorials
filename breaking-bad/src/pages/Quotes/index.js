import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { Item } from "./Item";

export const Quotes = () => {
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        data.map((item) => <Item key={item.quote_id} item={item} />)}
    </div>
  );
};
