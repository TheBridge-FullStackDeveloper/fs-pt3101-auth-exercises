

module.exports = (db) => async (req, res, next) => {
    const { email, password } = req.body;
  
    
  
    res.status(200).json({
      success: true,
    });
  };