import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.json())

const path = './students.json'

const readStudents = () => {
    const data = fs.readFileSync(path)
    return JSON.parse(data)
}

const writeStudents = () => {
    fs.writeFileSync(path, JSON.stringify(readStudents, null, 2))
}

app.get('/api/students', (req, res) => {
    const students = readStudents();
    res.json(students)
})

app.get('/api/students/:id', (req, res) => {
    const students = readStudents()
    const student = students.find(s => s.id === req.params.id);
    if (!student) {
        return res.status(404).json({ message: 'Student Not Found' })
    }
    res.json(student)
})

app.listen(3000, () => console.log('Server Running at port 3000'))