import { useState } from "react";

import NameJoiner from "../components/name-joiner";

import styles from "../styles/Home.module.css";

export default function Home() {
  const familyName = "Martin-Golding";

  const [firstNames, setFirstNames] = useState();
  const [firstNamesArray, setFirstNamesArray] = useState([]);

  const [middleNames, setMiddleNames] = useState();
  const [middleNamesArray, setMiddleNamesArray] = useState([]);

  function firstNameHandler(e) {
    setFirstNames(e.target.value);
    if (e.target.value === "") setFirstNamesArray(null);
    else setFirstNamesArray(e.target.value.split(/\r?\n/));
  }

  function middleNameHandler(e) {
    setMiddleNames(e.target.value);
    if (e.target.value === "") setMiddleNamesArray(null);
    else setMiddleNamesArray(e.target.value.split(/\r?\n/));
  }

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-2 gap-12 bg-gray-100 p-4">
        <div>
          <h2 className="text-3xl">First names</h2>
          <p className="mb-4">
            <small className="text-sm text-gray-500">
              1 name per line
            </small>
          </p>
          <textarea
            className="border w-full px-4 py-2"
            type="textarea"
            onChange={firstNameHandler}
            value={firstNames}
            rows={firstNamesArray == null ? 1 : firstNamesArray.length + 1}
          ></textarea>
        </div>
        <div>
        <h2 className="text-3xl">Middle names</h2>
        <p className="mb-4">
            <small className="text-sm text-gray-500">
              1 name per line
            </small>
          </p>
          <textarea
            className="border w-full px-4 py-2"
            type="textarea"
            onChange={middleNameHandler}
            value={middleNames}
            rows={middleNamesArray == null ? 1 : middleNamesArray.length + 1}
          ></textarea>
        </div>
      </div>
      <div className="p-4">
        {(firstNamesArray !== null && firstNamesArray.length !== 0) &&
          firstNamesArray.map((firstName, index) => {
            if (middleNamesArray !== null && middleNamesArray.length !== 0 ) {
              return (
                <NameJoiner
                  firstName={firstName}
                  middleNames={middleNamesArray}
                  familyName={familyName}
                  key={index}
                />
              );
            } else {
              return (
                <ul key={firstName}>
                  <li>
                    {firstName} {familyName}
                  </li>
                </ul>
              );
            }
          })}
      </div>
    </div>
  );
}
