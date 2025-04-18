
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        return Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandler };



// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.status || 500).json({
//             message: error.message || 'Something went wrong '
//         })
        
//     }

// }
