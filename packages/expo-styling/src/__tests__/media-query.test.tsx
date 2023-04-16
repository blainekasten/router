import { act, render } from "@testing-library/react-native";
import React from "react";

import { createMockComponent, registerCSS } from "./utils";
import { vw } from "../runtime/native/globals";
import { StyleSheet } from "../runtime/native/stylesheet";

const A = createMockComponent();

afterEach(() => {
  StyleSheet.__reset();
});

test("width", () => {
  registerCSS(`
.my-class { color: blue; }

@media (width: 500px) {
  .my-class { color: red; }
}`);

  render(<A className="my-class" />);

  expect(A).styleToEqual({
    color: "rgba(0, 0, 255, 1)",
  });

  act(() => {
    vw.__set(500);
  });

  expect(A).styleToEqual({
    color: "rgba(255, 0, 0, 1)",
  });
});

test("min-width", () => {
  registerCSS(`
.my-class { color: blue; }

@media (min-width: 500px) {
  .my-class { color: red; }
}`);

  render(<A className="my-class" />);

  expect(A).styleToEqual({
    color: "rgba(255, 0, 0, 1)",
  });

  act(() => {
    vw.__set(300);
  });

  expect(A).styleToEqual({
    color: "rgba(0, 0, 255, 1)",
  });
});

test("max-width", () => {
  registerCSS(`
.my-class { color: blue; }

@media (max-width: 500px) {
  .my-class { color: red; }
}`);

  render(<A className="my-class" />);

  expect(A).styleToEqual({
    color: "rgba(0, 0, 255, 1)",
  });

  act(() => {
    vw.__set(300);
  });

  expect(A).styleToEqual({
    color: "rgba(255, 0, 0, 1)",
  });
});