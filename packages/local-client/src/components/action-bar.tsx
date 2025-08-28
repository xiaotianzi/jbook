import './action-bar.css'
import { useActions } from "../hooks/use-actions"

interface ActionBarProps {
    id: string
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();
    const up = () => moveCell(id, 'up');
    const down = () => moveCell(id, 'down');
    const del = () => deleteCell(id);
    return (
        <div className="action-bar">
            <button className="button is-primary is-small" onClick={up}>
                <span className="icon">
                    <i className="fas fa-arrow-up"></i>
                </span>
            </button>
            <button className="button is-primary is-small" onClick={down}>
                <span className="icon">
                    <i className="fas fa-arrow-down"></i>
                </span>
            </button>
            <button className="button is-primary is-small" onClick={del}>
                <span className="icon">
                    <i className="fas fa-times"></i>
                </span>
            </button>
        </div>
    )
}

export default ActionBar;