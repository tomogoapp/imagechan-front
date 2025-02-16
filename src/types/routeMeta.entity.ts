import { Component } from "vue";

export interface RouteMeta {
    layout: string;
    layoutComponent?:Component
}

export interface Route{
    meta: RouteMeta
}