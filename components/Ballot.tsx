import Image from "next/image";

import styles from "../styles/Ballot.module.css";

import { SELECTION_PROPERTY } from "../constants";
import type { BallotInterface } from "../types";

export default function Ballot({
  ballot,
  setBallotSelection,
}: {
  ballot: BallotInterface;
  setBallotSelection: (category: string, selection: string) => void;
}) {
  return (
    <div className={styles.ballot}>
      <h2>{ballot.title}</h2>
      <div className={styles.ballotItems}>
        {ballot.items.map((nominee, index) => {
          const blockBallotSelection =
            ballot.hasOwnProperty(SELECTION_PROPERTY);

          const thisBallotIsSelected = ballot["selection"] === nominee.title;
          return (
            <span
              className={
                thisBallotIsSelected ? styles.ballotItemSelected : undefined
              }
              key={index}
            >
              <p className={styles.ballotItemTitle}>{nominee.title}</p>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.nominationImage}
                  alt={nominee.title}
                  src={nominee.photoUrL}
                  width={150}
                  height={150}
                />
              </div>
              <button
                test-id="ballot-submission-button"
                className={
                  blockBallotSelection
                    ? styles.hideBallotButton
                    : styles.ballotSelectionButton
                }
                disabled={blockBallotSelection}
                onClick={() => setBallotSelection(ballot.id, nominee.title)}
              >
                Select for Nomination
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
