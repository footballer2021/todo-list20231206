import { RequestHandler } from "express";
import db from "../db";

const getData:RequestHandler = (req, res) => {
    db.query('SELECT * FROM project_list', (error,result) => {
        return res.status(200).json(result);
    });
};

const createData:RequestHandler = (req, res) => {
    let id = req.body.id;
    let content = req.body.content;
    let editing = req.body.editing;
    const sqlInsert = 'INSERT INTO project_list(id,content,editing) VALUES(?,?,?)' 
    db.query(sqlInsert, [id, content, editing], (error,result) => {
        return res.status(200).json(result);
    });
};

const updateData:RequestHandler = (req, res) => {
    let id = req.params.id;
    let content = req.body.content;
    let editing = req.body.editing;
    const sqlUpdate = 'UPDATE project_list SET content = ?, editing = ? WHERE id = ?' 
    db.query(sqlUpdate, [content, editing, id], (error,result) => {
        return res.status(200).json(result);
    });
};

const deleteData:RequestHandler = (req, res) => {
    let id = req.params.id;
    const sqlDelete = 'DELETE FROM project_list WHERE id = ?' 
    db.query(sqlDelete, [id], (error,result) => {
        return res.status(200).json(result);
    });
};

export { getData, createData, updateData, deleteData};