const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel'); 

// Create a new student
const generateUsername = (firstName) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${firstName}${randomNumber}`;
};

const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
};

router.post('/', async (req, res) => {
    try {
        const studentData = req.body;
        studentData.registerDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });

        // Generate username from the first name
        const nameArray = studentData.name.split(' ');
        const firstName = nameArray[0];
        let username = generateUsername(firstName);

        // Generate password
        const password = generatePassword();

        let isUsernameUnique = false;

        while (!isUsernameUnique) {
            const existingStudent = await Student.findOne({ username });
            if (!existingStudent) {
                isUsernameUnique = true;
            } else {
                attemptCount++;
                username = generateUsername(firstName);
            }
        }

        if (!isUsernameUnique) {
            return res.status(400).json({ error: 'Unable to generate a unique username. Please try again.' });
        }

        studentData.username = username;
        studentData.password = password;

        const newStudent = new Student(studentData);

        try {
            await newStudent.save();
            res.status(201).json({
                newStudent
            });
        } catch (saveError) {
            console.error("Error in saving the data to the database:", saveError);
            res.status(500).json({ error: "Internal server error. Failed to save the student data." });
        }

    } catch (validationError) {
        console.error("Error in request validation:", validationError);
        res.status(400).json({ error: "Bad request. Please check your request data." });
    }
});

  

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
