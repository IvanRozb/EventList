import MainHeader from "@/components/layout/main-header";
import { Fragment } from "react";

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
