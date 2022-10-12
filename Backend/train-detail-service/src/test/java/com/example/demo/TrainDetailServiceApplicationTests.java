package com.example.demo;

import static org.junit.Assert.assertEquals;


import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.model.Train;
import com.example.demo.repository.TrainRepository;
import com.example.demo.service.TrainService;

@SpringBootTest
@RunWith(SpringRunner.class)
class TrainDetailServiceApplicationTests {
	@Autowired
	private TrainService trainService;
	
	@MockBean
	private TrainRepository trainrepository;
	

	@Test
	public void getTrainTest() {
		when(trainrepository.findAll()).thenReturn(Stream
				.of(new Train("22638","West Coast Express","Coimbatore","Chennai","M,T,W,T,F,S,S","3:30 p.m.","7:20 a.m."), 
	       new Train("15432","Coromandel Express","Howrah","Chennai","M,T,W,T,F,S,S","21:00 p.m.","8:50 a.m.")).collect(Collectors.toList()));
		assertEquals(2,trainService.getContact().size());
	}
		@Test
		public void saveTrainTest() {
			Train train = new Train("101SK","ARSHI Express","Kapal","Gujar","M","9:00 PM","9:25 PM");
			when(trainrepository.save(train)).thenReturn(train);
			assertEquals(train, trainService.addTrain(train));
		
		}
		
		@Test
		public void deleteUserTest() {
			Train train = new Train("12667","Rajdhani","Howrah","Ranchi","M,T,W,T,F,S","05:55 a.m.","12:25 p.m."); 
			trainService.deleteTrain(train);
			verify(trainrepository, times(1)).delete(train);
		}
		
 

	
	
	
	
}


