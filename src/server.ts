import express from 'express';
import { AppDataSource } from './persistance/db';
import { mainRouter } from './router/routes';
import { Product } from './persistance/product'
import { User } from './persistance/user';
import  cors from 'cors';

const app = express();
const port = 8080;

app.use(function(_, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origins, X-Requested-With, Content-Type, Accept");
    next();
})
    
app.use(express.json());
app.use ('/' , mainRouter);
app.use (cors());


AppDataSource.initialize()
    .then(async() => {
        console.log('Base de datos conectada');

//productos
        const validation_product = AppDataSource.manager.getRepository(Product)
        const product_exist = await validation_product.find()
        if (product_exist.length == 0){
            const product1 = new Product('https://www.starbucksathome.com/es/sites/default/files/styles/nutrition_instruction_image/public/2021-06/CaramelMacchiato_LongShadow%20%281%29.png?itok=yh_Eq5B3',"Caramel Macchiatto", 80, 1);
            const product2 = new Product('https://www.starbucksathome.com/ar/sites/default/files/2021-03/2-IcedLatte_LongShadow_Cream_1.png', "Iced latte", 50, 1);
            const product3 = new Product('https://www.starbucksathome.com/ar/sites/default/files/2021-06/10032021_CARAMEL_LATTEwVANILLA_LS-min.png', "Caramel Latte & Crema", 90, 1);
            const product4 = new Product('https://www.starbucksathome.com/ar/sites/default/files/2021-06/10032021_LATTE_MACCHIATO_LS-min.png', "Latte Macchiatto", 50, 1);
            const product5 = new Product('https://www.starbucksathome.com/ar/sites/default/files/2021-06/3-CaffeAmericano_LongShadow_Cream.png', "Cafe Americano", 20, 1);
            AppDataSource.manager.save([product1, product2, product3, product4,product5])
            console.log(product_exist)
        }

//usuario
        const validation_user = AppDataSource.manager.getRepository(User)
        const user_exist = await validation_user.find()
        if (user_exist.length == 0){
            const user1 = new User("prueba123" , "prueba@gmail.com", "12345678", "12345678")
            AppDataSource.manager.save([user1])
            console.log(user_exist)
        }
        app.listen(port, () => {
            console.log(`Servidor: http://localhost:${port}`);
        });
    })
    .catch(err => {
        throw err
    });

