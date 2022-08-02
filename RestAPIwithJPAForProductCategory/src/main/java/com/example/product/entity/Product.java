package com.example.product.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="productid")
	private int product_id;
	
	@Column (name="productname")
	private String product_name;
	
	@Column (name="description")
	private String description;
	
	@Column (name="unitprice")
	private double unit_price;
	
	@Column (name="imageurl")
	private String  image_url;
	
	@Column (name="unitsinstock")
	private int units_in_stock;
	
	@Column (name="datecreated")
	private Date date_created;
	
	@Column (name="lastupdated")
	private Date last_updated;
	
	@Column (name="categoryid")
	private int category_id;

	public Product() {
	}

	public Product(int product_id, String product_name, String description, double unit_price, String image_url,
			int units_in_stock, Date date_created, Date last_updated, int category_id) {
		this.product_id = product_id;
		this.product_name = product_name;
		this.description = description;
		this.unit_price = unit_price;
		this.image_url = image_url;
		this.units_in_stock = units_in_stock;
		this.date_created = date_created;
		this.last_updated = last_updated;
		this.category_id = category_id;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getUnit_price() {
		return unit_price;
	}

	public void setUnit_price(double unit_price) {
		this.unit_price = unit_price;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public int getUnits_in_stock() {
		return units_in_stock;
	}

	public void setUnits_in_stock(int units_in_stock) {
		this.units_in_stock = units_in_stock;
	}

	public Date getDate_created() {
		return date_created;
	}

	public void setDate_created(Date date_created) {
		this.date_created = date_created;
	}

	public Date getLast_updated() {
		return last_updated;
	}

	public void setLast_updated(Date last_updated) {
		this.last_updated = last_updated;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", product_name=" + product_name + ", description=" + description
				+ ", unit_price=" + unit_price + ", image_url=" + image_url + ", units_in_stock=" + units_in_stock
				+ ", date_created=" + date_created + ", last_updated=" + last_updated + ", category_id=" + category_id
				+ "]";
	}
	
}
