AquaTech is water storage management software designed for containers such as rotoplas and cisterns. It offers a comprehensive solution to monitor, verify, and maintain adequate water levels. This advanced system uses innovative technology to ensure a constant and efficient water supply, ensuring peace of mind and convenience for users.

**Level Monitoring and Verification:**
- The system is equipped with water level sensors that continuously monitor the containers, whether they are rotoplas or cisterns.
- The level information is recorded and updated in real time, allowing for precise monitoring of the water storage status.

**Automatic Pump Activation:**
- When the water levels in the containers fall below a predetermined threshold, the system automatically activates a pump to start the filling process.

**Email Notification:**
- In situations where water levels are insufficient, the system automatically sends email notifications to the registered customer.
- These notifications contain details about the current status of the containers, allowing for a proactive response by the user.

**Customer Visualization Portal:**
- Customers have access to an online portal where they can view the water levels of their containers in real-time.

**Important: The env file stores sensitive information like database credentials and secret keys.**

env File:

DB_HOST=
DB_USER=
DB_DATABASE=
DB_PASSWORD=
SALT=
PORT_SERVER=
ACCESS_TOKEN_PRIVATE_KEY=
REFRESH_TOKEN_PRIVATE_KEY=
NODEMAILER_USER=
NODEMAILER_PASSWORD=
NODEMAILER_USER_TO=

**Instructions for Using env:**

- Create a text file named env in your project's root directory.
- Copy and paste the above content into the env file.
- Replace the placeholder values with your specific database credentials and secret keys.
