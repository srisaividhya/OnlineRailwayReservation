package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Data
//@AllArgsConstructor
@Document(collection = "Orders")
public class BookingOrder{
	
		
		@Id
		private String id;
	    private String passengers;
		private String source;
		private String destination;
		private String date;
		
		public BookingOrder() {
			
		}

		public BookingOrder(String id, String passengers , String source, String destination, String date) {
			
			this.id = id;
			this.passengers = passengers;
			this.source = source;
			this.destination = destination;
			this.date=date;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getPassengers() {
			return passengers;
		}

		public void setPassengers(String passengers) {
			this.passengers = passengers;
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

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}
		@Override
		public String toString() {
			return "BookingOrder [id=" + id + ", passengers=" + passengers + ", source=" + source + ", destination="
					+ destination + " date=" + date + "]";
		}

		


		

}
