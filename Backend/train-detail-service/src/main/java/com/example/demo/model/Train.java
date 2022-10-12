package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Trains")
	public class Train {
		
		@Id	
		private String trainid;
		private String trainName;
		private String source;
		private String destination;
		private String runDays;
		private String arrivalTime;
		private String departureTime;
		
	public Train() {
		
	}

	public Train(String trainid, String trainName, String source, String destination,String runDays,String arrivalTime,String departureTime) {
		super();
		this.trainid = trainid;
		this.trainName = trainName;
		this.source = source;
		this.destination = destination;
		this.runDays=runDays;
		this.arrivalTime=arrivalTime;
		this.departureTime=departureTime;
		
	}


	public String getTrainid() {
		return trainid;
	}


	public void setTrainid(String trainid2) {
		this.trainid = trainid2;
	}


	public String getTrainName() {
		return trainName;
	}


	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}


	public String getSource() {
		return source;
	}


	public void setSource(String source) {
		this.source = source;
	}


	public String getDestination() {
		return destination;
	}


	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	
	public String getRunDays() {
			return runDays;
		}


		public void setRunDays(String runDays) {
			this.runDays = runDays;
		}
		public String getArrivalTime() {
			return arrivalTime;
		}


		public void setArrivalTime(String arrivalTime) {
			this.arrivalTime = arrivalTime;
		}


		public String getDepartureTime() {
			return departureTime;
		}


		public void setDepartureTime(String departureTime) {
			this.departureTime = departureTime;
		}
		
		

}

