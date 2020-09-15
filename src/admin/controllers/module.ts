import { RequestHandler } from "express";
import config from '../../config';
import fs from 'fs';
import path from 'path'

export const getAllModules: RequestHandler = (req, res, next) => {
    const modulesPath = path.join(path.dirname(__dirname), '..', '..', config.modulesPath)
    console.log(config.modulesPath);
    let modules = []
    try {
        fs.readdir(modulesPath, (err, file) => {
            modules = file.filter(f => !f.includes('.'))
        })
    } catch (error) {

    }



    res.render('admin/module', { title: 'Modules', })

}