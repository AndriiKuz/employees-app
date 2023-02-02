import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
      />
    );
  });

  return data.length ? (
    <ul className="app-list list-group">{elements}</ul>
  ) : (
    <div className="empty">Дані відсутні</div>
  );
};

export default EmployeesList;
