/**************************************************************************************************
 * hoobs-desktop                                                                                  *
 * Copyright (C) 2020 HOOBS                                                                       *
 *                                                                                                *
 * This program is free software: you can redistribute it and/or modify                           *
 * it under the terms of the GNU General Public License as published by                           *
 * the Free Software Foundation, either version 3 of the License, or                              *
 * (at your option) any later version.                                                            *
 *                                                                                                *
 * This program is distributed in the hope that it will be useful,                                *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                                 *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                                  *
 * GNU General Public License for more details.                                                   *
 *                                                                                                *
 * You should have received a copy of the GNU General Public License                              *
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.                          *
 **************************************************************************************************/

import CameraWidget from "@/components/widgets/camera.vue";
import AccessoryWidget from "@/components/widgets/accessory.vue";
import ActivityWidget from "@/components/widgets/activity.vue";
import CpuWidget from "@/components/widgets/cpu.vue";
import TemperatureWidget from "@/components/widgets/temperature.vue";
import MemoryWidget from "@/components/widgets/memory.vue";
import BridgesWidget from "@/components/widgets/bridges.vue";
import SystemWidget from "@/components/widgets/system.vue";
import LogWidget from "@/components/widgets/log.vue";
import WeatherWidget from "@/components/widgets/weather.vue";
import CurrentWidget from "@/components/widgets/current.vue";
import ForecastWidget from "@/components/widgets/forecast.vue";

export const available = [{
    name: "activity-widget",
    label: "activity",
    selected: false,
}, {
    name: "system-widget",
    label: "system_info",
    selected: false,
}, {
    name: "cpu-widget",
    label: "cpu",
    selected: false,
}, {
    name: "current-widget",
    label: "weather",
    selected: false,
}, {
    name: "temperature-widget",
    label: "cpu_temperature",
    selected: false,
}, {
    name: "forecast-widget",
    label: "weather_forecast",
    selected: false,
}, {
    name: "memory-widget",
    label: "memory",
    selected: false,
}, {
    name: "weather-widget",
    label: "weather_combined",
    selected: false,
}, {
    name: "bridges-widget",
    label: "bridges",
    selected: false,
}, {
    name: "log-widget",
    label: "log",
    selected: false,
}];

export const initial = [{
    x: 0,
    y: 29,
    w: 6,
    h: 8,
    i: "bridges-widget",
    component: "bridges-widget",
}, {
    x: 0,
    y: 21,
    w: 6,
    h: 8,
    i: "memory-widget",
    component: "memory-widget",
}, {
    x: 0,
    y: 14,
    w: 6,
    h: 7,
    i: "cpu-widget",
    component: "cpu-widget",
}, {
    x: 0,
    y: 0,
    w: 80,
    h: 14,
    i: "activity-widget",
    component: "activity-widget",
}, {
    x: 6,
    y: 14,
    w: 27,
    h: 23,
    i: "weather-widget",
    component: "weather-widget",
}, {
    x: 61,
    y: 14,
    w: 19,
    h: 38,
    i: "system-widget",
    component: "system-widget",
}];

export function layout(name: string): { [key: string]: any } | undefined {
    switch (name) {
        case "camera-widget":
            return {
                x: 0,
                y: 0,
                w: 23,
                h: 22,
                component: "camera-widget",
            };

        case "accessory-widget":
            return {
                x: 0,
                y: 0,
                w: 8,
                h: 16,
                component: "accessory-widget",
            };

        case "activity-widget":
            return {
                x: 0,
                y: 0,
                w: 80,
                h: 36,
                i: "activity-widget",
                component: "activity-widget",
            };

        case "cpu-widget":
            return {
                x: 0,
                y: 0,
                w: 6,
                h: 8,
                i: "cpu-widget",
                component: "cpu-widget",
            };

        case "temperature-widget":
            return {
                x: 0,
                y: 0,
                w: 6,
                h: 8,
                i: "temperature-widget",
                component: "temperature-widget",
            };

        case "memory-widget":
            return {
                x: 0,
                y: 0,
                w: 6,
                h: 8,
                i: "memory-widget",
                component: "memory-widget",
            };

        case "bridges-widget":
            return {
                x: 0,
                y: 0,
                w: 6,
                h: 8,
                i: "bridges-widget",
                component: "bridges-widget",
            };

        case "log-widget":
            return {
                x: 0,
                y: 0,
                w: 33,
                h: 42,
                i: "log-widget",
                component: "log-widget",
            };

        case "system-widget":
            return {
                x: 0,
                y: 0,
                w: 27,
                h: 96,
                i: "system-widget",
                component: "system-widget",
            };

        case "weather-widget":
            return {
                x: 0,
                y: 0,
                w: 27,
                h: 23,
                i: "weather-widget",
                component: "weather-widget",
            };

        case "forecast-widget":
            return {
                x: 0,
                y: 0,
                w: 27,
                h: 24,
                i: "forecast-widget",
                component: "forecast-widget",
            };

        case "current-widget":
            return {
                x: 0,
                y: 0,
                w: 13,
                h: 30,
                i: "current-widget",
                component: "current-widget",
            };

        default:
            return undefined;
    }
}

export function widgets(): { [key: string]: any } {
    return {
        "camera-widget": CameraWidget,
        "accessory-widget": AccessoryWidget,
        "activity-widget": ActivityWidget,
        "cpu-widget": CpuWidget,
        "temperature-widget": TemperatureWidget,
        "memory-widget": MemoryWidget,
        "bridges-widget": BridgesWidget,
        "system-widget": SystemWidget,
        "log-widget": LogWidget,
        "weather-widget": WeatherWidget,
        "current-widget": CurrentWidget,
        "forecast-widget": ForecastWidget,
    };
}
