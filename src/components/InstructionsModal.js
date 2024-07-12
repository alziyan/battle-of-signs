// InstructionsModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";

const InstructionsModal = ({ show, handleClose }) => (
  <Modal
    className="bg-gray-200 w-[700px]"
    show={show}
    onHide={handleClose}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Battle of Signs Instructions</Modal.Title>
    </Modal.Header>
    <Modal.Body className="p-4">
      <h5 className="font-bold mb-2">About Battle of Signs</h5>
      <p>
        Battle of Signs is a strategic game where players try to occupy the
        maximum area of the board to win.
      </p>

      <h5 className="font-bold mb-2">Components</h5>
      <ul className="list-disc list-inside mb-2">
        <li>One Board (7x7 grid)</li>
        <li>Two Dices</li>
      </ul>

      <h5 className="font-bold mb-2">Objective</h5>
      <p>
        The aim is to fill the circles with coins marked with "+" and "-" signs.
        The player who occupies the maximum area or completes a horizontal or
        vertical line wins.
      </p>

      <h5 className="font-bold mb-2">Gameplay</h5>
      <ul className="list-disc list-inside mb-2">
        <li>Players take turns to place coins on the board.</li>
        <li>
          Coins can be placed on empty circles or over opponent's coins through
          battles.
        </li>
        <li>Battle occurs when trying to occupy an opponent's coin.</li>
      </ul>

      <h5 className="font-bold mb-2">Battle Rules</h5>
      <p>
        Battles are based on the rules of addition and multiplication of
        integers:
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>
          <strong>Horizontal/Vertical Battles:</strong> Only between opposite
          signs. Both players roll a dice; the higher roll wins and occupies the
          opponent's circle.
        </li>
      </ul>

      <h5 className="font-bold mb-2">Winning the Game</h5>
      <p>
        You win by completing a line horizontally or vertically or by occupying
        the most circles when no more moves are possible.
      </p>
    </Modal.Body>
    <Modal.Footer className="bg-gray-100">
      <Button variant="primary" onClick={handleClose} className="w-full py-2">
        Let's Play!
      </Button>
    </Modal.Footer>
  </Modal>
);

export default InstructionsModal;
