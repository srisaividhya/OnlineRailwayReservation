package com.example.demo.resources;

import org.apache.logging.log4j.*;


import java.util.Optional;

/*import org.slf4j.Logger;
import org.slf4j.LoggerFactory;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Train;
import com.example.demo.repository.TrainRepository;

@CrossOrigin(origins="http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin")
@RestController
@RequestMapping("/trains")

public class TrainController {
	
	 Logger logger=  LogManager.getLogger(TrainController.class);
	
	@Autowired
	private TrainRepository trainrepository;

	@PostMapping("/addTrain")
	public String saveTrain(@RequestBody Train trainid) {
		logger.info("saveTrain method accessed");
		trainrepository.save(trainid);
		return "Added train with id :  " + trainid.getTrainid();
    }
	
	@GetMapping("{trainid}")
	public Optional<Train> getTrain(@PathVariable String trainid){
		logger.info("getTrain method accessed");
		return trainrepository.findById(trainid);
	}
		
	@DeleteMapping("/delete/{trainid}")
	public String deleteTrain (@PathVariable String trainid) {
		trainrepository.deleteById(trainid);
		logger.info("deleteTrain method accessed");
		return "Train deleted with id : "+trainid;
    }
	
	@PutMapping("/update/{trainid}")
	public Train updateTrain(@PathVariable("trainid") String trainid,@RequestBody Train t ) {
		t.setTrainid(trainid);
		trainrepository.save(t);
		logger.info("updateTrain method accessed");
		return t;
	}
	
	
	  @PutMapping("/update")
	    public Train updateTrain(@RequestBody Train t) {
	        return trainrepository.save(t);
	    }
		
}













//@CrossOrigin("http://localhost:3000")
/*package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
	
	Logger logger= LoggerFactory.getLogger(HomeResource.class);
	
	@RequestMapping("/")
	public String home() {
		
		logger.trace("home method accessed");
		return "Hello  Spring boot";
	}

}*/