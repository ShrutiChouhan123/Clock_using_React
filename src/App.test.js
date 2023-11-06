import { render, screen } from '@testing-library/react';
import Home from './Home';
import Test from './Test';
import Stopwatch from './Stopwatch';
import '@testing-library/jest-dom';
import moment from 'moment-timezone';
test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByTestId('todo-1');
  expect(linkElement).toBeInTheDocument();
});



test('Clock test case', () => {
  render(<Home />);
  const clockTest = screen.getByText('Asia/Kolkata');
  expect(clockTest).toBe(clockTest)

})

test('stopwatch test case', () => {
  render(<Stopwatch />);
  const StopWatchTest = screen.getByText("0:00:00:00");
  expect(StopWatchTest).toBeInTheDocument()

})

// test('renders learn react link', () => {
//   render(<Stopwatch />);
//   const Stopbtn = screen.getByTestId('data-testid');

//   expect(Stopbtn).toBeInTheDocument();
// });

test('renders initial time of 0 seconds', () => {
  const { getByText } = render(<Stopwatch />);
  const timeElement = getByText('0:00:00:00');
  expect(timeElement).toBeInTheDocument();
});

test('renders initial time of 0 seconds', () => {
  render(<Stopwatch />);
  const start = screen.getByText('Start');
  expect(start).toBeInTheDocument()
});



test('renders initial time of 0 seconds', () => {
  render(<Stopwatch />);
  const reset = screen.getByText('Reset');
  expect(reset).toBe(reset)
});


test('clock', () => {
  render(<Home />)
  const timeElement = screen.getByText(/(\d{1}|\d{2}):\d{2}:\d{2} (AM|PM)/i);
  expect(timeElement).toBeInTheDocument();
})



test('page 1',()=>{
  let { getByTestId } = render(<Home/>)
  expect(getByTestId("page1")).toBeDisabled();
})

test('page 2',()=>{
  let { getByTestId } = render(<Home/>)
  expect(getByTestId("page2")).toBeEnabled();
})

test('check both pages',()=>{
  let { getByTestId } = render(<Home/>)
  expect(getByTestId("page2","page2")).not.toBeDisabled();
})

const TimeZones = moment.tz.names()
test('check countries list',()=>{
  render(<Home/>)
  expect(TimeZones).toContain("Asia/Kolkata");

})

test('check TimeZones is Availabe or not in our code', () => {
  render(<Home/>)
  expect(TimeZones).toBeTruthy();
});