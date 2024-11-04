import { Modal } from "antd";
import type { Person } from "../../types/interface";

interface PersonModalProps {
  visible: boolean;
  onClose: () => void;
  person: Person | null; 
}

export function PersonModal({ visible, onClose, person }: PersonModalProps) {
  return (
    <Modal
      title={person ? person.name : ''}
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      {person && (
        <div>
          <p><strong>Height:</strong> {person.height}</p>
          <p><strong>Mass:</strong> {person.mass}</p>
          <p><strong>Hair Color:</strong> {person.hair_color}</p>
          <p><strong>Skin Color:</strong> {person.skin_color}</p>
          <p><strong>Eye Color:</strong> {person.eye_color}</p>
          <p><strong>Birth Year:</strong> {person.birth_year}</p>
          <p><strong>Gender:</strong> {person.gender}</p>
          <p><strong>Homeworld:</strong> {person.homeworld}</p>
          <p><strong>Films:</strong> {person.films?.join(', ')}</p>
        </div>
      )}
    </Modal>
  );
}
