package org.siddheshproj.dumy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class MyController {

 
  // RequestMapping TO TAKE THE REQUEST AND myMethod IS USED FOR SENDING RESPONSE
  @RequestMapping("m")
  public static String myMethod(){
    return "CODING SESSIONS";
  }

  //TO SENT SERVLET AS RESPONSE
  @RequestMapping("s")
  public static String myMethod2(){
    return "<h1>SERVLET</h1>";
  }

  //process-form IS THE ENDPOINT AND THIS METHOD RUNS FOR GET REQUEST
  @GetMapping("process-form")
  public static String getData(@RequestParam int num1,@RequestParam int num2) {
    int res=num1+num2;
    return "RESULT IS :- " + res;
  }
  
  //post method to hide user input data in url
  @PostMapping("process-form2")
  public static String postMethodName(@RequestParam int num1,@RequestParam int num2) {
    int res=num1+num2;
    return "RESULT IS :- " + res;
  }
  
  
}
