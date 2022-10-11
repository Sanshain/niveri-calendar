//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { useStore, initStore } from "./store/source/state";
import Button from "./button";



// import Calendar from "preact-calendar";

// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';

// import { Datepicker } from "datepickerdate";
// import 'datepickerdate/lib/index.css'
// import 'datepickerdate/src/Calendar.css'
// import 'https://unpkg.com/datepickerdate@1.0.12/lib/index.cjs.css'


// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import dotenv from 'dotenv'
// dotenv.config()

import { DateInput, DatePicker } from "./DatePicker";
import "./datePicker.css"


setup(h);

const Title = styled("h1")`
  text-align: center;
  color: red;
`;

const BtnClassName = css`
  background-color: white;
`;



const App = props => {

	const [message] = useState('Preact App');
	const [selected, setSelected] = useState(new Date());
	// const [selected, setSelected] = useState(undefined);

	const [count, setCount] = useStore('count')

	// const { dispatch, count } = useStoreon('count')


	return <>
		<header />
		<main className={BtnClassName}>
			<h1 className='title'>{message}</h1>
			<button onClick={(e) => setCount(count + 1)}>
				{count}
			</button>
			{/* <Calendar minDate={new Date('2019-01-01')} disablePast={true} onSelect={console.log} highlightSecondFourthSatdays={true}
				highlightSundays={true} highlightToday={true} /> */}
			{/* <DayPicker
				// mode="single"
				// footer={<p>{selected ? `You picked ${format(selected, 'PP')}` : 'Please pick a day'}</p>}
				
				mode="range"
				footer={<p>{selected ? `You picked ${JSON.stringify(selected)}` : 'Please pick a day'}</p>}
				min={3}				

				selected={selected}
				onSelect={setSelected}				
			/> */}
			{/* <Datepicker
				name="yourFormControlName"
				value="2019-08-28"
				placeholder="Your custom placeholder"
				onDateChanged={(n, v) => console.log(n, v)}
			/> */}
			{/* <DatePicker selected={selected} onChange={(date) => setSelected(date)} /> */}			
		</main>
		<Button />
		<DateInput />
		<Title>789</Title>
	</>
}

export default App
