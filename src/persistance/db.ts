import { DataSource } from "typeorm"
import { Product } from "./product"
import { User } from "./user"
import "reflect-metadata"
import { Cart } from "./carrito"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'alva',
    synchronize: true,
    logging: true,
    entities: [Product, User, Cart],
    subscribers: [],
    migrations: []
})

export type Producto = {
    id: number
    img: string
    name: string
    price: number
    quantity: number
}

export type Usuario = {
    id: number
    username: string
    email: string
    password: string
    password2: string
}

export type Carrito = {
    id: number
    cart: string
}

export const db:Array <Producto> = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: "Nike",
        price: 80,
        quantity: 1,
    }]

export const udb:Array <Usuario> = [
    {
        id: 1,
        username: "dulce",
        email: "dulce@gmail.com",
        password: "dulce123",
        password2: "dulce123"
    }
]
export const cdb:Array <Carrito> = [
    {
        id:1,
        cart: "Reloj"
    }
]