import { vega } from "vega-embed";
import isFunction from "./isFunction";
import type { View } from "../types";

export default function updateSingleDatasetInView(
  view: View,
  name: string,
  value: any
): void {
  if (value) {
    if (isFunction(value)) {
      value(view.data(name));
    } else {
      view.change(
        name,
        vega
          .changeset()
          .remove(() => true)
          .insert(value)
      );
    }
  }
}