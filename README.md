# Employee Management System (Full Stack)

A full-stack **Employee Management System** built to understand how frontend, backend, and database communicate in a real-world application.

---

## 🚀 Features

- Add, update, delete employees
- View employee list in table format
- Search employees by name
- RESTful APIs
- Swagger API documentation
- MySQL database integration
- Clean frontend UI (HTML, CSS, JavaScript)

---

## 🛠 Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Gradle
- MySQL
- Swagger (SpringDoc OpenAPI)

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)

---

## 📂 Project Structure (Backend)

src/main/java/com/example/yaduvanshi
├── controller
│ └── EmployeeController.java
├── service
│ └── EmployeeService.java
├── repository
│ └── EmployeeRepository.java
├── model
│ └── Employee.java
└── YaduvanshiApplication.java


---

## 📂 Project Structure (Frontend)

employee-frontend
├── index.html
├── css/
│ └── style.css
└── js/
└── app.js


---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | /employees | Get all employees |
| GET | /employees/{id} | Get employee by ID |
| POST | /employees | Add new employee |
| PUT | /employees/{id} | Update employee |
| DELETE | /employees/{id} | Delete employee |
| GET | /employees/search?keyword= | Search employees |

---

## 📘 Swagger UI

After running backend, access Swagger at:

http://localhost:8080/swagger-ui/index.html


---

## 🗄 Database

- MySQL database: `employee_db`
- Table auto-created using JPA (`ddl-auto=update`)
- Email field has unique constraint

---

## ▶ How to Run

### Backend
```bash
./gradlew bootRun
