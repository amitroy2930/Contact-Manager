const asyncHandler = require("express-async-handler");
// @desc Get all contacts
//@route GET/api/contacts
//@access public

const getContacts = asyncHandler((req, res) => {
    res.status(200).json({message: "Get all contacts"});
});

//@desc Create new contacts
//@route POST/api/contacts
//@access public

const createContact = asyncHandler((req, res) => {
    console.log("The rquest body is", req.body);
    const {name, email, phone} = req.body;

    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    res.status(201).json({message: "Create Contact"});
});

//@desc get contact
//@route GET/api/contacts/:id
//@access public

const getContact = asyncHandler((req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

//@desc update contact
//@route PUT/api/contacts/:id
//@access public

const updateContact = asyncHandler((req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

//@desc delete contact
//@route DELETE/api/contacts/:id
//@access public

const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };