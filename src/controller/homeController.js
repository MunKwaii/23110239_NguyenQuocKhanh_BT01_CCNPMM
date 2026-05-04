import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('---------');
        console.log(data);
        console.log('.........');
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) { console.log(e); }
}

let getAboutPage = (req, res) => { return res.render('test/about.ejs'); }

let getCRUD = (req, res) => { return res.render('crud.ejs'); }

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    // console.log(req.body); // lấy thông tin body của http request
    console.log(message);
    return res.send('Post crud to server');
}

let getFindAllCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('---------');
    // console.log(data);
    // console.log('---------');
    return res.render('users/findAllUser.ejs', { datalist: data });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    // console.log(req.query.id);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // console.log('---------');
        // console.log(userData);
        // console.log('---------');
        return res.render('users/editUser.ejs', { data: userData });
    } else {
        return res.send('không lấy được id');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let data1 = await CRUDService.updateUser(data);
    return res.render('users/findAllUser.ejs', { datalist: data1 });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Deleted!!!!!!!!!!!!');
    } else {
        return res.send('Not find user');
    }
}

module.exports = {
    getHomePage: getHomePage, getAboutPage: getAboutPage, getCRUD: getCRUD,
    postCRUD: postCRUD, getFindAllCrud: getFindAllCrud, getEditCRUD: getEditCRUD,
    putCRUD: putCRUD, deleteCRUD: deleteCRUD
};