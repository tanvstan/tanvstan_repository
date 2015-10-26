package com.tanvstan;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/cars")
public class CarController {

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody void addCar(@RequestBody final  Car car) {
        System.out.println(car.toString());
    }

}
