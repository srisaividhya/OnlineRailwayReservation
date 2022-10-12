package com.example.demo.resources;

import org.apache.logging.log4j.*;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Train;
import com.example.demo.repository.TrainRepository;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/search")
public class UserController {
	
	Logger logger= LogManager.getLogger(UserController.class);
	
	@Autowired
	private TrainRepository trainrepository;

    @GetMapping("/findAllTrains")
    public List<Train> getTrains(){
    	logger.info("getAllTrains method accessed");
    	return trainrepository.findAll();
	
}
    @GetMapping("/findAllTrains/{trainid}")
    public Optional<Train> getTrains(@PathVariable String trainid){
    	logger.info("getTrains by train id method accessed");
	    return trainrepository.findById(trainid);
}

}
