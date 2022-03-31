-nse-app: db
    -tables (Table with month_name and year )
        -jan_08
        -jan_09
        -jan_10
        -jan_11
        -jan_12
        -jan_13
        -jan_14
        -jan_15
        -jan_16
        -jan_17
        -jan_18
        -jan_19
        -jan_20
        -jan_21
        -jan_22

Each Table has 12 rows;
sr_no: int, Primary Key, NOT NULL
security_symbol: VARCHAR, NOT NULL
security_name: VARCHAR
industry: VARCHAR
equity_cap: FLOAT
free_float: FLOAT
weightage: FLOAT
beta: FLOAT
r2: FLOAT
volatilty: FLOAT
monthly_return: FLOAT
avg_impact_cost: FLOAT

Description
sr_no: Top Performing Companies Sorted in Descending Order
security_symbol: Name by which its shares or equity is addressed in the stock market
security_name: Full Name of the Company
industry: Which Industry it belongs to
equity_cap: Market Cap of the company
free_float: Total number of Shares of the company publicly traded
weightage: % contributer in NIFTY 50
beta: Relative movements of the stock, If >1, stock is more volatile, <1 reflects less volatile nature
r2: R-squared measures how closely the performance of an asset can be attributed to the performance of a selected benchmark index.
volatilty: When a security experiences periods of unpredictable price movements, greater the number, more volatile the security 
monthly_return: Closing Price on Last Day of Month / Closing Price on Last Day of Previous Month
avg_impact_cost: Impact cost represents the cost of executing a transaction in a given stock, for a specific predefined order size, at any given point of time.