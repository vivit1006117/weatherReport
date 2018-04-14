import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class WeatherForecastModel {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column
    public state: string;
    public weatherType: string;
    public temp: number;
    public pressure: number;
    public humidity: number;
    public temp_min: number;
    public temp_max: number;
    public windSpeed: number;
    public windDeg: number;
    public clouds: number;
    public date: number;
}