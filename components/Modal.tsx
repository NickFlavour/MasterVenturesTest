import type { BallotInterface } from "../types";
import styles from "../styles/Modal.module.css";

export default function Modal({
  closeModal,
  ballots,
}: {
  closeModal: () => void;
  ballots: BallotInterface[];
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={closeModal} className={styles.close}>
          X
        </span>

        {ballots.map((ballot) => (
          <>
            <h1>{ballot.title}</h1>
            <h2>{ballot.selection}</h2>
          </>
        ))}
      </div>
    </div>
  );
}
