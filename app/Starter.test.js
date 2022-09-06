import jest from "jest";
jest.useFakeTimers();
import { TestScheduler } from "jest";
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import AppText from "./components/AppText";






describe('<AppText />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<AppText />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it('renders correctly', () => {
    const tree = renderer.create(<AppText />).toJSON();
    expect(tree).toMatchSnapshot();
  });

test("trivially true", () =>{
    expect(1).toBe(1);
});