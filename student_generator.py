from faker import Faker
import random
import json
from datetime import datetime, timedelta

faker = Faker()

streams = ["Computer Science", "Electrical", "Mechanical", "Commerce", "Biology", "Physics"]
grades = ["A", "B", "C", "D"]
genders = ["Male", "Female"]

students = []

for i in range(40):
    gender = random.choice(genders)
    dob = faker.date_of_birth(minimum_age = 17, maximum_age = 23).strftime("%Y-%m-%d")
    student = {
        "id": str(i + 1),
        "name": faker.name_male() if gender == "Male" else faker.name_female(),
        "rollNumber": f"STU{1000 + i}",
        "dob": dob,
        "gender": gender,
        "grade": random.choice(grades),
        "stream": random.choice(streams),
        "email": faker.email(),
        "phone": faker.msisdn()[0:10],
        "address": f"{faker.city()}, {faker.country()}",
        "parent": {
            "fatherName": faker.name_male(),
            "motherName": faker.name_female(),
            "fatherPhone": faker.msisdn()[0:10],
            "motherPhone": faker.msisdn()[0:10],
            "parentEmail": faker.email(),
            "occupation": faker.job()
        }
}
    students.append(student)

# Save to a JSON file
file_path = "./server/students.json"
with open(file_path, "w") as f:
    json.dump(students, f, indent = 2)

file_path
