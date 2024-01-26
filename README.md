# Kiosk Project Setup Guide

This guide will walk you through the process of setting up the Kiosk project on your local machine using XAMPP.

## Prerequisites

- Ensure you have [XAMPP](https://www.apachefriends.org/index.html) installed on your machine.

## Installation Steps

### Step 1: Copying the Project

1. Locate the `Kiosk` project folder on your machine.
2. Copy the entire folder to the `htdocs` directory in your XAMPP installation. This is typically found at `C:\xampp\htdocs` on Windows or `/Applications/XAMPP/htdocs` on Mac.

### Step 2: Starting XAMPP Services

1. Open the XAMPP Control Panel.
2. Start the **Apache** and **MySQL** services by clicking on the 'Start' buttons next to each service.

### Step 3: Accessing phpMyAdmin

1. Open your preferred web browser.
2. Navigate to `http://localhost/phpmyadmin`.
3. You should now see the phpMyAdmin interface.

### Step 4: Importing the Database

1. In phpMyAdmin, click on the 'Import' tab at the top.
2. Click on 'Choose File' and select the `kiosk.sql` file provided with the project.
3. Click on 'Go' at the bottom of the page to import the database.

### Step 5: Accessing the Application

1. Once the database is successfully imported, open a new tab in your browser.
2. Navigate to `http://localhost/Kiosk_PHPVersion/public`.
3. You should now be able to access and use the Kiosk application.

---

**Note**: Replace `Kiosk_PHPVersion` with the actual name of your project folder if it's different. This guide assumes that the folder name is `Kiosk_PHPVersion`.
