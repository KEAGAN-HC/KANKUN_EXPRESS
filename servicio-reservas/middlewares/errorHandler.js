const reservationErrorHandler = (err, req, res, next) => {
    console.error("Error en Reservas:", err.stack);
  
    let statusCode = err.statusCode || 500;
    let message = err.message || "Error en el servidor al procesar la reserva.";
  
    res.status(statusCode).json({
      success: false,
      error: message,
    });
  };
  
  export default reservationErrorHandler;
  