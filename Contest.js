   // Tải dữ liệu từ tệp JSON
        function loadActivityData() {
            fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    // Gọi hàm để hiển thị dữ liệu
                    displayActivityData(data);
                })
                .catch(error => {
                    console.log('Lỗi khi tải dữ liệu:', error);
                });
        }

        // Hiển thị dữ liệu danh sách kì thi
function displayActivityData(data) {
  const activityDataElement = document.getElementById('activityData');
  const tableBody = activityDataElement.querySelector('tbody');
  tableBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = item.description;

    const createdDateCell = document.createElement('td');
    createdDateCell.textContent = item.createdDate;

    const typeCell = document.createElement('td');
    typeCell.textContent = item.type;

    const optionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Chỉnh sửa';
    editButton.addEventListener('click', () => {
      // Xử lý sự kiện chỉnh sửa
      console.log('Chỉnh sửa kì thi', item.id);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.addEventListener('click', () => {
      // Xử lý sự kiện xóa
      deleteRow(row);
    });

    optionsCell.appendChild(editButton);
    optionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(createdDateCell);
    row.appendChild(typeCell);
    row.appendChild(optionsCell);

    tableBody.appendChild(row);
  });
}

        // Xóa dòng trong danh sách
        function deleteRow(row) {
            row.remove();
        }

        // Gọi hàm để tải dữ liệu khi trang được tải
        document.addEventListener('DOMContentLoaded', () => {
            loadActivityData();
        });